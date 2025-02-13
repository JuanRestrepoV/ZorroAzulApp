from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from config import Config

# Configuración de la aplicación
app = Flask(__name__)
app.config.from_object(Config)

# Configuración de CORS
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Inicializar la base de datos
db = SQLAlchemy(app)

# Modelos
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(200), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)

class Event(db.Model):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    capacity = db.Column(db.String(50))
    description = db.Column(db.Text, nullable=False)
    image = db.Column(db.String(255))
    price = db.Column(db.String(50))
    services = db.Column(db.JSON, nullable=False)

class Reservation(db.Model):
    __tablename__ = 'reservations'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.Time, nullable=False)
    services = db.Column(db.JSON, nullable=False)
    user = db.relationship('User', backref=db.backref('reservations', lazy=True))
    event = db.relationship('Event', backref=db.backref('reservations', lazy=True))

# Rutas
@app.route('/')
def home():
    return "¡Conexión a PostgreSQL establecida correctamente!"

# Endpoint para registrar usuarios
@app.route('/register', methods=['POST', 'OPTIONS'])
def register_user():
    if request.method == 'OPTIONS':
        return jsonify({"message": "OK"}), 200

    data = request.get_json()
    if not data or not data.get('username') or not data.get('email') or not data.get('password'):
        return jsonify({"error": "Faltan campos obligatorios"}), 400

    # Verificar si el usuario o correo ya existen
    if User.query.filter_by(username=data['username']).first():
        return jsonify({"error": "El nombre de usuario ya está en uso"}), 400
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"error": "El correo electrónico ya está en uso"}), 400

    # Crear el usuario
    hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
    new_user = User(username=data['username'], email=data['email'], password=hashed_password)

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "Usuario registrado exitosamente"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Error al registrar usuario", "details": str(e)}), 500

# Endpoint para iniciar sesión
@app.route('/login', methods=['POST', 'OPTIONS'])
def login_user():
    if request.method == 'OPTIONS':
        return jsonify({"message": "OK"}), 200

    data = request.get_json()
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({"error": "Faltan campos obligatorios"}), 400

    # Verificar el usuario
    user = User.query.filter_by(email=data['email']).first()
    if not user or not check_password_hash(user.password, data['password']):
        return jsonify({"error": "Credenciales inválidas"}), 401

    return jsonify({"message": "Inicio de sesión exitoso", "user": {"id": user.id, "username": user.username}}), 200

# Endpoint para obtener todos los eventos
@app.route('/events', methods=['GET', 'OPTIONS'])
def get_events():
    if request.method == 'OPTIONS':
        return jsonify({"message": "OK"}), 200

    try:
        events = Event.query.all()
        events_list = [
            {
                "id": event.id,
                "title": event.title,
                "capacity": event.capacity,
                "description": event.description,
                "image": event.image,
                "price": event.price,
                "services": event.services,
            }
            for event in events
        ]
        return jsonify(events_list), 200
    except Exception as e:
        return jsonify({"error": "Error al obtener eventos", "details": str(e)}), 500

# Endpoint para crear una reserva
@app.route('/reservations', methods=['POST', 'OPTIONS'])
def create_reservation():
    if request.method == 'OPTIONS':
        return jsonify({"message": "OK"}), 200

    data = request.get_json()
    if not data or not data.get('user_id') or not data.get('event_id') or not data.get('date') or not data.get('time') or not data.get('services'):
        return jsonify({"error": "Faltan campos obligatorios"}), 400

    try:
        # Verificar si el usuario y el evento existen
        user = User.query.get(data['user_id'])
        event = Event.query.get(data['event_id'])
        if not user:
            return jsonify({"error": "Usuario no encontrado"}), 404
        if not event:
            return jsonify({"error": "Evento no encontrado"}), 404

        # Crear la reserva
        new_reservation = Reservation(
            user_id=data['user_id'],
            event_id=data['event_id'],
            date=data['date'],
            time=data['time'],
            services=data['services']
        )

        db.session.add(new_reservation)
        db.session.commit()
        return jsonify({"message": "Reserva creada exitosamente"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Error al crear la reserva", "details": str(e)}), 500

# Configurar errores personalizados para depuración
@app.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": "Recurso no encontrado"}), 404

@app.errorhandler(500)
def internal_error(error):
    db.session.rollback()
    return jsonify({"error": "Error interno del servidor"}), 500

# Ejecución de la aplicación
if __name__ == '__main__':
    app.run(debug=True)
