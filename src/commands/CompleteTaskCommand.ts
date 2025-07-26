import { AbstractCommand } from './AbstractCommand';
import { TaskList } from '../models/TaskList';

export class CompleteTaskCommand extends AbstractCommand {
  private oldCompleted?: boolean;

  constructor(
    private taskList: TaskList,
    private taskId: string,
    private completed: boolean = true
  ) {
    super();
  }

  execute(): void {
    const task = this.taskList.getAllTasks().find(t => t.id === this.taskId);
    if (task) {
      this.oldCompleted = task.completed;
      this.taskList.completeTask(this.taskId, this.completed);
    }
  }

  undo(): void {
    if (this.oldCompleted !== undefined) {
      this.taskList.completeTask(this.taskId, this.oldCompleted);
    }
  }
}
