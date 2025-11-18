from rest_framework.serializers import ModelSerializer
from .models import Voluntariado

class VoluntariadoSerializer(ModelSerializer):
    class Meta:
        model = Voluntariado
        fields = '__all__'
        