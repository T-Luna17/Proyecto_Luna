from django.db import models

# Create your models here.
class Voluntariado(models.Model):
    nombre = models.CharField(max_length=255, unique=True, null=False)
    descripcion_corta = models.TextField(null=False)
    descripcion_larga = models.TextField(null=False)
    fecha_inicio = models.DateField(null=False)
    fecha_fin = models.DateField(null=False)
    ubicacion = models.CharField(max_length=255, null=False)
    voluntario = models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE)
    empresa = models.ForeignKey('empresas.Empresa', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.nombre
    
class Inscripcion(models.Model):
    usuario = models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE)
    voluntariado = models.ForeignKey('Voluntariado', on_delete=models.CASCADE)
    fecha = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('usuario', 'voluntariado')

    def __str__(self):
        return f"{self.usuario.username} → {self.voluntariado.nombre}"
