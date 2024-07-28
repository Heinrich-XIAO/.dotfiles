vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function(use)
  -- Packer can manage itself
  use 'wbthomason/packer.nvim'

  use {'nvim-telescope/telescope.nvim', tag = '0.1.5',
    requires = { {'nvim-lua/plenary.nvim'} }
  }
	-- Using Packer
	use 'navarasu/onedark.nvim'
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

	use 'ThePrimeagen/vim-be-good'


  use {
    'kawre/leetcode.nvim',
    build = ':TSUpdate html',
    dependencies = {
      'nvim-telescope/telescope.nvim',
      'nvim-lua/plenary.nvim',
      'MunifTanjim/nui.nvim',
      -- optional
      'nvim-treesitter/nvim-treesitter',
      'rcarriga/nvim-notify',
      'nvim-tree/nvim-web-devicons',
    },
    config = function()
      -- Your configuration goes here
    end,
  }

	use {
    'numToStr/Comment.nvim',
    config = function()
        require('Comment').setup()
    end
	}

	use 'm4xshen/autoclose.nvim'
	use 'windwp/nvim-autopairs'
	use 'mattn/emmet-vim'
	use 'lewis6991/gitsigns.nvim'
end)
