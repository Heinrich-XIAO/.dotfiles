require("jswiz.remap")
require("jswiz.packer")
--require("jswiz.lazy")

local g = vim.g
local wo = vim.wo
local bo = vim.bo

local TAB_WIDTH = 2
bo.tabstop = TAB_WIDTH
bo.shiftwidth = TAB_WIDTH
bo.expandtab = true

wo.cursorline = true
wo.nu = true
wo.rnu = true
