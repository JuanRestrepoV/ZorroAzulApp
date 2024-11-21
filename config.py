import os

class Config:
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:Temporal272$@localhost:5432/zorro_azul"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.urandom(24)
