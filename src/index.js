import Resolver from '@forge/resolver';
import ForgeUI, { render,  MacroConfig, TextField, CheckboxGroup, Checkbox } from '@forge/ui';

const resolver = new Resolver();

resolver.define('getUserConfiguration', ({ payload, context }) => {

  const configuration = context.extension.config;

  console.log('UserConfiguration', configuration);

  const toDo = 100 - configuration.inProgress - configuration.done;
  const showBorder = configuration.options ? configuration.options.some(x => x === 'showBorder') : false;

  return (
    {
      toDoWidth: toDo,
      inProgressWidth: configuration.inProgress,
      doneWidth: configuration.done,
      showBorder: showBorder,
      backGroundColor: configuration.backGroundColor,
      toDoColor: configuration.toDoColor,
      inProgressColor: configuration.inProgressColor,
      doneColor: configuration.doneColor
    }
  );
});

export const handler = resolver.getDefinitions();
  
const defaultConfig = {
  inProgress: 0,
  done: 0,
  backGroundColor: '#ffebe6',
  toDoColor: '#205081',
  inProgressColor: '#f6c342',
  doneColor: '#14892c'
};
  
const Config = () => {
  return (
    <MacroConfig>
      <TextField name="inProgress" label="Percentage In Progress" defaultValue={defaultConfig.inProgress} />
      <TextField name="done" label="Percentage Done" defaultValue={defaultConfig.done} />
      <TextField name="backGroundColor" label="Colour of the background" defaultValue={defaultConfig.backGroundColor} />
      <CheckboxGroup label="Options" name="options">
        <Checkbox value="showBorder" label="ShowBorder" />
      </CheckboxGroup>
      <TextField name="toDoColor" label="Colour of the ToDo section" defaultValue={defaultConfig.toDoColor} />
      <TextField name="inProgressColor" label="Colour of the InProgress section" defaultValue={defaultConfig.inProgressColor} />
      <TextField name="doneColor" label="Colour of the Done section" defaultValue={defaultConfig.doneColor} />
    </MacroConfig>
  );
};
  
export const config = render(<Config />);
