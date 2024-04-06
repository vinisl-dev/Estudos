from django.contrib import admin
from .models import Users
from django.contrib.auth import admin as admin_auth_django
from .forms import UserChangeForm, UserCreationForm

#registra do Fomrulario customizado do admin do django

@admin.register(Users)
class UsersAdmin(admin_auth_django.UserAdmin):
  form = UserChangeForm
  add_from = UserCreationForm
  model = Users
  fieldsets = admin_auth_django.UserAdmin.fieldsets + (
    ('Cargo',{'fields':('cargo',)}),
  )
