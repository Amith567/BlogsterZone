from django.shortcuts import redirect,get_object_or_404
from django.contrib.auth import logout
from django.views import View,generic
from django.contrib.auth.forms import UserChangeForm # UserCreationForm,
from .forms import Sighupform,Profileeditform
from django.urls import reverse_lazy
from theblog.models import Profile

class Userprofileedit(generic.UpdateView):
    model=Profile
    template_name='registration/user_profile_edit.html'
    fields='__all__'

class Showprofileview(generic.DetailView):
    model=Profile
    template_name='registration/show_profile.html'
    def get_context_data(self,*args, **kwargs):
        page_user=get_object_or_404(Profile,id=self.kwargs['pk'])
        context=super(Showprofileview,self).get_context_data(*args, **kwargs)
        context['page_user']=page_user
        return context

class Registerview(generic.CreateView):
    form_class = Sighupform
    template_name = 'registration/register.html'
    success_url = reverse_lazy('login')

class LogoutView(View):
    def get(self, request):
        logout(request)
        return redirect('home')  # or '/' depending on your homepage
class Usereditview(generic.UpdateView):
    form_class = Profileeditform
    template_name = 'registration/edit_profile.html'
    success_url = reverse_lazy('home')
    def get_object(self):
        return self.request.user