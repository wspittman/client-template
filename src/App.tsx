import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Selector } from './components/Selector';
import { Toggle } from './components/Toggle';

const exampleSelections = [
  { value: '1', text: 'One' },
  { value: '2', text: 'Two' },
  { value: '3', text: 'Three' },
];

export function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const [toggleValue, setToggleValue] = useState(false);
  const [selectorValue, setSelectorValue] = useState(
    exampleSelections[0].value
  );

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} alt="React logo" />
        </a>
      </div>
      <Typography variant="h1">Vite + React</Typography>
      <div>
        <Button
          variant="outlined"
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </Button>
        <Typography>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </div>
      <Typography>Click on the Vite and React logos to learn more</Typography>

      <Toggle
        label="Toggle Example"
        tooltip="Toggle tooltip example"
        value={toggleValue}
        setValue={setToggleValue}
      />

      <Selector
        label="Selector Example"
        tooltip="Selector tooltip example"
        value={selectorValue}
        setValue={setSelectorValue}
        options={exampleSelections}
      />
    </div>
  );
}
