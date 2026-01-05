from django.shortcuts import render
from django.views.generic import ListView,DetailView,CreateView,UpdateView,DeleteView
from .models import Post,Category
from .forms import Postform,Postupdateform
from django.urls import reverse_lazy
from django.shortcuts import redirect,get_object_or_404
# Create your views here.
# def home(request):
#     return render(request,'home.html',{})

class Homeview(ListView):
    model=Post
    template_name='home.html'
    ordering=['-publish_date']
    def get_context_data(self,*args, **kwargs):
        cat_menu=Category.objects.all()
        context=super(Homeview,self).get_context_data(*args, **kwargs)
        context['cat_menu']=cat_menu
        return context
class Detailview(DetailView):
    model=Post
    template_name='article.html'
class AddPostview(CreateView):
    model=Post
    form_class=Postform
    template_name='add_post.html'
    def form_valid(self, form):
        form.instance.author=self.request.user
        return super().form_valid(form)
    # fields='__all__'
class UpdatePostview(UpdateView):
    model=Post
    form_class=Postupdateform
    template_name='update_post.html'
    # fields=['title','tag','body']
class DeletePostview(DeleteView):
    model=Post
    template_name='delete_post.html'
    success_url=reverse_lazy('home')
class Addcategory(CreateView):
    model=Category
    template_name='add_category.html'
    fields="__all__"
def Categoryview(request,cats):
    category_list=Post.objects.filter(category=cats)
    return render(request,'category_view.html',{'cats':cats,'category_list':category_list})
def like_post(request,pk):
    post=get_object_or_404(Post, id=pk)
    if request.user.is_authenticated:
        if request.user in post.likes.all():
            post.likes.remove(request.user)
        else:
            post.likes.add(request.user)
    return redirect('article',pk=pk)