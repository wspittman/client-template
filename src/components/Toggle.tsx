import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';

export const Toggle = ({
  label,
  value,
  setValue,
  isDisabled,
  tooltip = '',
}: ComponentProps<boolean>): JSX.Element => {
  return (
    <Tooltip title={tooltip}>
      <FormControlLabel
        control={
          <Switch
            checked={value}
            onChange={(e) => setValue(e.target.checked)}
          />
        }
        label={label}
        disabled={isDisabled}
      />
    </Tooltip>
  );
};
