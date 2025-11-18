from django.db import models
from django.contrib.auth.models import AbstractUser

class Usuario(AbstractUser):
    # Campos extra
    num_cedula = models.CharField(max_length=12, unique=True, null=False)
    num_telefono = models.CharField(max_length=15, unique=True, null=False)
    direccion = models.CharField(max_length=255, null=False)
    foto_perfil = models.TextField(null=True, blank=True)
    fecha_nacimiento = models.DateField(null=False)
    genero = models.CharField(max_length=10, null=False)

    # Para evitar conflictos con Groups y Permissions
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='usuarios_groups',
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='usuarios_permissions',
        blank=True
    )


class Registro(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecha_registro = models.DateTimeField(auto_now_add=True)


class Logros(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    descripcion = models.CharField(max_length=255)
    fecha_obtencion = models.DateField()

