# Generated by Django 4.0.6 on 2022-07-21 09:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(help_text='username', max_length=255)),
                ('password', models.CharField(help_text='password', max_length=255)),
                ('email', models.CharField(help_text='email', max_length=255)),
            ],
        ),
    ]
