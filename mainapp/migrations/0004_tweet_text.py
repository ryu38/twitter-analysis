# Generated by Django 3.0.3 on 2020-04-04 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0003_auto_20200403_1713'),
    ]

    operations = [
        migrations.AddField(
            model_name='tweet',
            name='text',
            field=models.CharField(max_length=256, null=True),
        ),
    ]
