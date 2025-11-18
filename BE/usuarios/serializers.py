from rest_framework import serializers
from .models import Usuario, Registro, Logros


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = [
            'id', 
            'username', 
            'first_name', 
            'last_name', 
            'password',
            'email', 
            'num_cedula',
            'direccion',
            'num_telefono',
            'fecha_nacimiento',
            'genero'
        ]
        
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        usuario = super().create(validated_data)
        if password:
            usuario.set_password(password)
            usuario.save()
        return usuario


class LoginUsuarioSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    
    def validate(self, data):
        from django.contrib.auth import authenticate
        usuario = authenticate(username=data.get('username'), password=data.get('password'))
        if not usuario:
            raise serializers.ValidationError("Credenciales inválidas")
        data['usuario'] = usuario
        return data


class LogroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logros
        fields = '__all__'