# Generated by Django 5.0.4 on 2024-04-13 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='deadline',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='todo',
            name='finished_at',
            field=models.DateField(null=True),
        ),
    ]
