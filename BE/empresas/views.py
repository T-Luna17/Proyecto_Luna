from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Empresa
from .serializers import EmpresaSerializer, LoginEmpresaSerializer

class EmpresaListCreateView(ListCreateAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer


class EmpresaLogin(APIView):
    def post(self, request):
        serializer = LoginEmpresaSerializer(data=request.data)
        if serializer.is_valid():
            empresa = serializer.validated_data['empresa']
            # Retornar datos públicos de la empresa sin contraseña
            response_serializer = EmpresaSerializer(empresa)
            return Response(response_serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)


class PerfilEmpresaView(APIView):
    def get(self, request, id_empresa):
        try:
            empresa = Empresa.objects.get(id=id_empresa)
            serializer = EmpresaSerializer(empresa)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Empresa.DoesNotExist:
            return Response({"error": "Empresa no encontrada"}, status=status.HTTP_404_NOT_FOUND)