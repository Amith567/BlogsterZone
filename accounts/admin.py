from django.contrib import admin
from .models import User, Profile

admin.site.register(User)

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    readonly_fields = ('user',)
