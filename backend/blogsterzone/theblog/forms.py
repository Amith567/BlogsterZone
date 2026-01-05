from django import forms
from .models import Post,Category
category_list=[]

choices=Category.objects.all().values_list('name','name')
for item in choices:
    category_list.append(item)


class Postform(forms.ModelForm):
     class Meta:
        model=Post
        fields=('title','tag','category','body','snippets','header_img')
        widgets={
            'title':forms.TextInput(attrs={'class':'form-control','placeholder':'enter title'}),
            'tag':forms.TextInput(attrs={'class':'form-control','placeholder':'enter the title tag'}),
            'category':forms.Select(choices=category_list,attrs={'class':'form-control','placeholder':'enter the category'}),
            'body':forms.Textarea(attrs={'class':'form-control','placeholder':'enter content of blog'}),
            'snippets':forms.Textarea(attrs={'class':'form-control','placeholder':'enter snippet'}),
        }
class Postupdateform(forms.ModelForm):
     class Meta:
        model=Post
        fields=('title','tag','body','category','snippets','header_img')
        widgets={
            'title':forms.TextInput(attrs={'class':'form-control','placeholder':'enter title'}),
            'tag':forms.TextInput(attrs={'class':'form-control','placeholder':'enter the title tag'}),
            'body':forms.Textarea(attrs={'class':'form-control','placeholder':'enter content of blog'}),
            'category':forms.Select(choices=category_list,attrs={'class':'form-control','placeholder':'enter the category'}),
            'snippets':forms.Textarea(attrs={'class':'form-control','placeholder':'enter snippet'}),

        }