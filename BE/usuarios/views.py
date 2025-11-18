from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView,ListAPIView
from .models import Usuario,Logros
from .serializers import UsuarioSerializer, LogroSerializer, LoginUsuarioSerializer
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from rest_framework import status


class UsuarioListCreateView(ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class LogroListCreateView(ListCreateAPIView):
    queryset = Logros.objects.all()
    serializer_class = LogroSerializer

class LogroPorUsuarioView(ListCreateAPIView):
    queryset = Logros.objects.all()
    serializer_class = LogroSerializer
 
    def get_queryset(self):
        return super().get_queryset().filter(usuario_id=self.kwargs["usuario_id"])

class UsuarioLogin(APIView):
    def post(self, request):
        serializer = LoginUsuarioSerializer(data=request.data)
        if serializer.is_valid():
            usuario = serializer.validated_data['usuario']
            login(request, usuario)
            # Retornar solo datos públicos del usuario, sin contraseña
            response_serializer = UsuarioSerializer(usuario)
            return Response(response_serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)

class PerfilUsuarioView(APIView):
    def get(self, request, id_usuario):
        try:
            usuario = Usuario.objects.get(id=id_usuario)
            serializer = UsuarioSerializer(usuario)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Usuario.DoesNotExist:
            return Response({"error":"Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)

