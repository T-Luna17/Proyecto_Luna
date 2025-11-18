from django.urls import path
from .views import EmpresaListCreateView, EmpresaLogin, PerfilEmpresaView

urlpatterns = [
    path("register-empresa/", EmpresaListCreateView.as_view(), name="registro-empresa"),
    path("login-empresa/", EmpresaLogin.as_view(), name="login-empresa"),
    path("perfil/<int:id_empresa>/", PerfilEmpresaView.as_view(), name="perfil-empresa"),
]