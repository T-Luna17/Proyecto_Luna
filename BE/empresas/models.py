from django.db import models

class Empresa(models.Model):
    nombre = models.CharField(max_length=255, unique=True, null=False)
    direccion = models.CharField(max_length=255, null=False)
    telefono = models.CharField(max_length=15, null=False)
    correo_contacto = models.EmailField(unique=True, null=False, default="contacto@empresa.com")
    sitio_web = models.URLField(null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    cedula_juridica = models.CharField(max_length=20, unique=True, null=False)
    password = models.CharField(max_length=255, null=False, default="temp123")

    def __str__(self):
        return self.nombre