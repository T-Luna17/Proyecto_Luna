from .views import (
    VoluntariadoListCreateView,
    VoluntariadoUpdateDeleteView,
    InscribirVoluntariado,
    VerVoluntariadosInscritos
)
from django.urls import path

urlpatterns = [
    path("voluntariados/", VoluntariadoListCreateView.as_view(), name="voluntariado-list"),
    path("voluntariados/crear/", VoluntariadoListCreateView.as_view(), name="voluntariado-create"),
    path("voluntariados/editar/<int:pk>/", VoluntariadoUpdateDeleteView.as_view(), name="voluntariado-edit"),
    path("voluntariados/eliminar/<int:pk>/", VoluntariadoUpdateDeleteView.as_view(), name="voluntariado-delete"),

    path("voluntariados/inscribir/", InscribirVoluntariado.as_view(), name="inscribir-voluntariado"),
    path("voluntariados/usuario/<int:usuario_id>/", VerVoluntariadosInscritos.as_view(), name="voluntariados-inscritos"),
]

