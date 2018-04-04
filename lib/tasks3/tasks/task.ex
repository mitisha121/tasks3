defmodule Tasks3.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :completed, :boolean, default: false
    field :desc, :string, null: false
    field :time, :integer, default: 0, null: false
    field :title, :string, null: false
    belongs_to :user, Tasks3.Users.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :desc, :time, :completed, :user_id])
    |> validate_required([:title, :desc, :time, :completed, :user_id])
  end
end
