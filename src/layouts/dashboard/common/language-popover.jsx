import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { LANGUAGES } from 'src/constants';

export default function LanguagePopover() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(null);
  const [selectedOption, setSelectedOption] = useState(LANGUAGES[0]);
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = (option) => {
    setOpen(null);
  };
  const handleChangeLang = (option) => {
    setOpen(null);
    setSelectedOption(option);
    const lang_code = option.code
    i18n.changeLanguage(lang_code).then((t) => {
      t('key'); // -> same as i18next.t
    });;
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(open && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <img src={selectedOption.icon} alt={selectedOption.label} />
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 180,
          },
        }}
      >
        {LANGUAGES.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === selectedOption.value}
            onClick={() => handleChangeLang(option)}
            sx={{ typography: 'body2', py: 1 }}
          >
            <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
