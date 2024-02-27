# Set the default shell
export SHELL="/bin/zsh"

# Enable vi mode
bindkey -v

# Set the prompt
PROMPT='%B%m%~%b %# '

# Enable syntax highlighting
if command -v zinit >/dev/null 2>&1; then
    zinit light zdharma/fast-syntax-highlighting
fi

# Enable autosuggestions
if command -v zinit >/dev/null 2>&1; then
    zinit light zsh-users/zsh-autosuggestions
fi

# Enable history substring search
if command -v zinit >/dev/null 2>&1; then
    zinit light zsh-users/zsh-history-substring-search
fi

# Set the editor (change it to your preferred editor)
export VISUAL=vim
export EDITOR=vim

# Add your customizations or additional plugins here

# ... (your customizations)

# Load zinit
if command -v zinit >/dev/null 2>&1; then
    zinit self-update
    zinit load --no-pager
fi

### Added by Zinit's installer
if [[ ! -f $HOME/.local/share/zinit/zinit.git/zinit.zsh ]]; then
    print -P "%F{33} %F{220}Installing %F{33}ZDHARMA-CONTINUUM%F{220} Initiative Plugin Manager (%F{33}zdharma-continuum/zinit%F{220})…%f"
    command mkdir -p "$HOME/.local/share/zinit" && command chmod g-rwX "$HOME/.local/share/zinit"
    command git clone https://github.com/zdharma-continuum/zinit "$HOME/.local/share/zinit/zinit.git" && \
        print -P "%F{33} %F{34}Installation successful.%f%b" || \
        print -P "%F{1 60} The clone has failed.%f%b"
fi

source "$HOME/.local/share/zinit/zinit.git/zinit.zsh"
autoload -Uz _zinit
(( ${+_comps} )) && _comps[zinit]=_zinit

# Load a few important annexes, without Turbo
# (this is currently required for annexes)
zinit light-mode for \
    zdharma-continuum/zinit-annex-as-monitor \
    zdharma-continuum/zinit-annex-bin-gem-node \
    zdharma-continuum/zinit-annex-patch-dl \
     zdharma-continuum/zinit-annex-rust

### End of Zinit's installer chunk
#


clear

# Aliasies
alias l='ls -lhAFa'


[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
eval "$(zoxide init --cmd cd zsh)"
eval "$(~/.rbenv/bin/rbenv init - zsh)"

neofetch


