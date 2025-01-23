from flask import Blueprint, request, jsonify
from db import get_db_connection

app = Blueprint('reservations', __name__)

# Crear una reserva
@app.route('/api/reservations', methods=['POST'])
def create_reservation():
    # Código para crear una reserva (como en el ejemplo anterior)
    pass

# Listar reservas por estado
@app.route('/api/reservations/<estado>', methods=['GET'])
def get_reservations_by_state(estado):
    # Código para listar reservas por estado
    pass

# Actualizar estado de una reserva
@app.route('/api/reservations/<int:id>', methods=['PUT'])
def update_reservation_state(id):
    # Código para actualizar estado de una reserva
    pass
