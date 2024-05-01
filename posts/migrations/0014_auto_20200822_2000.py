# Generated by Django 3.1 on 2020-08-22 20:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0013_merge_20200822_0818'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historicalpost',
            name='image',
            field=models.URLField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='historicalpost',
            name='url',
            field=models.URLField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.URLField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='url',
            field=models.URLField(max_length=1024, null=True),
        ),
        migrations.DeleteModel(
            name='PostBookmark',
        ),
    ]
