# Generated by Django 5.0.4 on 2024-05-11 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enbalde', '0014_venta_pago_venta_transaccion'),
    ]

    operations = [
        migrations.CreateModel(
            name='Configuracion',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=64)),
                ('valor', models.CharField(max_length=1024)),
            ],
            options={
                'verbose_name': 'Valores por defecto del sistema',
                'verbose_name_plural': 'Configuraciones',
                'db_table': 'Configuracion',
            },
        ),
    ]
