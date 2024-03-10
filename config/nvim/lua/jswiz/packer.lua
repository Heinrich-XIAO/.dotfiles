vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function(use)
  -- Packer can manage itself
  use 'wbthomason/packer.nvim'

  use {
  'nvim-telescope/telescope.nvim', tag = '0.1.5',
-- or                            , branch = '0.1.x',
  requires = { {'nvim-lua/plenary.nvim'} }
  }

  use {
    'sainnhe/everforest',
    as = 'everforest',
    config = function()
      vim.cmd('colorscheme everforest')
      vim.cmd('set background=dark')
    end
  }

  use 'mbbill/undotree'
  use 'alec-gibson/nvim-tetris'
  use 'seandewar/nvimesweeper'
  use 'eandrju/cellular-automaton.nvim'
end)
