import click
from . import crud

@click.group()
def cli():
    print("this is working")

cli.add_command(crud.create)