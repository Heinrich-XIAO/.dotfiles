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
  use 'andweeb/presence.nvim'
  use 'mbbill/undotree'
  use 'alec-gibson/nvim-tetris'
  use 'seandewar/nvimesweeper'
  
  use {
    "williamboman/mason.nvim"
  }


	use 'wakatime/vim-wakatime'
  
  use 'dstein64/vim-startuptime'

	use 'neovim/nvim-lspconfig'

	use 'hrsh7th/nvim-cmp'
	use 'hrsh7th/cmp-cmdline'
	use 'hrsh7th/cmp-nvim-lsp'
	use 'hrsh7th/cmp-buffer'
	use 'hrsh7th/cmp-path'

	use 'L3MON4D3/LuaSnip'
	use 'saadparwaiz1/cmp_luasnip'

	use "rafamadriz/friendly-snippets"
end)
