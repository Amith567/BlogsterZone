from rest_framework import serializers
from .models import User,Profile

class RegisterSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)

    class Meta:
        model=User
        fields=[
            'username','email','password','phone'
        ]
    def create(self, validated_data):
        user=User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            phone=validated_data['phone']
        )
        return user
    
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Profile
        exclude=['user']


class UserProfileSerializer(serializers.ModelSerializer):
    profile=ProfileSerializer()

    class Meta:
        model=User
        fields=[
            'id','username','email','phone','is_verified','profile'
        ]
    
    def update(self, instance, validated_data):
        profile_data=validated_data.pop('profile',None)

        for attr,value in validated_data.items():
            setattr(instance,attr,value)
        instance.save()
        if profile_data:
            profile=instance.profile
            for attr,value in profile_data.items():
                setattr(profile,attr,value)
            profile.save()
        return instance
        

