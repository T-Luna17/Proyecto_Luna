from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Voluntariado, Inscripcion
from .serializers import VoluntariadoSerializer
from usuarios.models import Usuario


class VoluntariadoListCreateView(ListCreateAPIView):
    queryset = Voluntariado.objects.all()
    serializer_class = VoluntariadoSerializer


class InscribirVoluntariado(APIView):
    def post(self, request):
        usuario_id = request.data.get("usuario")
        voluntariado_id = request.data.get("voluntariado")

        try:
            usuario = Usuario.objects.get(id=usuario_id)
            voluntariado = Voluntariado.objects.get(id=voluntariado_id)
        except:
            return Response(
                {"error": "Usuario o Voluntariado no existe"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if Inscripcion.objects.filter(usuario=usuario, voluntariado=voluntariado).exists():
            return Response({"message": "Ya estás inscrito"}, status=status.HTTP_200_OK)

        Inscripcion.objects.create(usuario=usuario, voluntariado=voluntariado)
        return Response({"message": "Inscripción exitosa"}, status=status.HTTP_201_CREATED)


class VerVoluntariadosInscritos(ListAPIView):
    serializer_class = VoluntariadoSerializer

    def get_queryset(self):
        usuario_id = self.kwargs.get("usuario_id")
        inscripciones = Inscripcion.objects.filter(usuario_id=usuario_id)
        return [i.voluntariado for i in inscripciones]
    

class VoluntariadoUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = Voluntariado.objects.all()
    serializer_class = VoluntariadoSerializer

