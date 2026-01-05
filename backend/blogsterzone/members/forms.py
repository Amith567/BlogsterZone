from django.contrib.auth.forms import UserCreationForm,UserChangeForm
from django.contrib.auth.models import User
from django import forms


class Sighupform(UserCreationForm):
    email=forms.EmailField(widget=forms.EmailInput(attrs={'class': 'form-control'}))
    first_name=forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    last_name=forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))

    class Meta:
        model=User
        fields=['username','email','first_name','last_name','password1','password2']
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update({'class':'form-control'})
        self.fields['password1'].widget.attrs.update({'class':'form-control'})
        self.fields['password2'].widget.attrs.update({'class':'form-control'})
class Profileeditform(UserChangeForm):
    username=forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    email=forms.EmailField(widget=forms.EmailInput(attrs={'class': 'form-control'}))
    first_name=forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    last_name=forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))

    class Meta:
        model=User
        fields=['username','email','first_name','last_name']
        
        
        