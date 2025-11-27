from rest_framework.generics import ListCreateAPIView
from .models import Voluntariado
from .serializers import VoluntariadoSerializer

class VoluntariadoListCreateView(ListCreateAPIView):
    queryset = Voluntariado.objects.all()
    serializer_class = VoluntariadoSerializer
