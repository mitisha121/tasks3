defmodule Tasks3Web.TaskView do
  use Tasks3Web, :view
  alias Tasks3Web.TaskView
  alias Tasks3Web.UserView

  def render("index.json", %{tasks: tasks}) do
    %{data: render_many(tasks, TaskView, "task.json")}
  end

  def render("show.json", %{task: task}) do
    %{data: render_one(task, TaskView, "task.json")}
  end

  def render("task.json", %{task: task}) do
    %{id: task.id,
      title: task.title,
      desc: task.desc,
      time: task.time,
      completed: task.completed,
      user: render_one(task.user, UserView, "user.json")
    }
  end
end
