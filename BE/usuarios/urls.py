from django.urls import path
from .views import UsuarioLogin,UsuarioListCreateView
from .views import PerfilUsuarioView
from .views import LogroListCreateView
from .views import LogroPorUsuarioView

urlpatterns = [
   path("validar-usuario",UsuarioLogin.as_view()),
   path("register-usuario",UsuarioListCreateView.as_view()),
   path("perfil/usuario/<int:id_usuario>/", PerfilUsuarioView.as_view(), name="perfil-usuario"),
]  