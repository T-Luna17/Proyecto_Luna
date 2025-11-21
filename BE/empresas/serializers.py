from rest_framework import serializers
from .models import Empresa

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'


class LoginEmpresaSerializer(serializers.Serializer):
    correo_contacto = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    
    def validate(self, data):
        try:
            empresa = Empresa.objects.get(correo_contacto=data.get('correo_contacto'))
            if empresa.password != data.get('password'):
                raise serializers.ValidationError("Contraseña incorrecta")
            data['empresa'] = empresa
        except Empresa.DoesNotExist:
            raise serializers.ValidationError("Empresa no encontrada")
        return data
