import { AbstractCommand } from './AbstractCommand';
import { TaskList } from '../models/TaskList';
import { Task } from '../models/Task';

export class RemoveTaskCommand extends AbstractCommand {
  private removedTask?: Task;

  constructor(private taskList: TaskList, private taskId: string) {
    super();
  }

  execute(): void {
    // Видаляємо задачу, зберігаємо для undo
    this.removedTask = this.taskList.removeTask(this.taskId);
  }

  undo(): void {
    // Відновлюємо задачу назад
    if (this.removedTask) {
      this.taskList.addTask(this.removedTask);
    }
  }
}
