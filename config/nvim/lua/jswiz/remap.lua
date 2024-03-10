vim.g.mapleader = " "
vim.keymap.set("n", "<leader>pv", vim.cmd.Ex)
vim.keymap.set('n', '<leader>u', vim.cmd.UndotreeToggle)
vim.api.nvim_set_keymap(  't'  ,  '<ESC>'  ,  '<C-\\><C-n>'  ,  {noremap = true}  )
vim.keymap.set("n", "<leader>M", ":Nvimesweeper")
