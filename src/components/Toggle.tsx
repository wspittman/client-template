import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  tooltip?: string;
}

export const Toggle = ({
  label,
  value,
  onChange,
  tooltip = '',
}: Props): JSX.Element => {
  return (
    <Tooltip title={tooltip}>
      <FormControlLabel
        control={
          <Switch
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
          />
        }
        label={label}
      />
    </Tooltip>
  );
};
