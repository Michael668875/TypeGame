import click
from datetime import datetime
import json
from pathlib import Path

@click.command()
@click.argument("title")
@click.option("--content", prompt=True, help="Content of the note")
@click.option("--tags", help="Comma separated list of tags")
def create(title, content, tags):
    """Create a new note."""
    BASE_DIR = Path(__file__).resolve().parents[1]
    notes_directory = BASE_DIR / ".notes"
    notes_directory.mkdir(exist_ok=True)
    note_name = f"{title}.txt"
    if (notes_directory / note_name).exists():
        click.echo(f"Note with title '{title}' already exists.")
        exit(1)

    note_data = {
        "content": content,
        "tags": tags.split(",") if tags else [],
        "created_at": datetime.now().isoformat(),
    }
    with open(notes_directory / note_name, "a+") as file:
        json.dump(note_data, file)
    click.echo(f"Note '{title}' created.")