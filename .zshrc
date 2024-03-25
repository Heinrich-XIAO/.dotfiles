# Set the default shell
export SHELL="/bin/zsh"

# Enable vi mode
bindkey -v

# Set the prompt
PROMPT='%(?:%{[01;32m%}%1{➜%} :%{[01;31m%}%1{➜%} )  %{[36m%}%~%{[00m%} %# '
#PROMPT='%B%m%~%b %# '
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

if command -v zinit >/dev/null 2>&1; then
    zinit light johnhamelink/env-zsh
fi

# Set the editor (change it to your preferred editor)
export VISUAL=nvim
export EDITOR=nvim

# Add your customizations or additional plugins here

# ... (your customizations)

# Load zinit
if command -v zinit >/dev/null 2>&1; then
    zinit self-update
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

export PATH="${PATH}:${HOME}/Documents/programs/swww/target/release"
export PATH="$HOME/haskell/music:$PATH"
export PATH="$HOME/Documents/programs/vesktop:$PATH"
export PATH="$HOME/Documents/programs/zig:$PATH"
export PATH="$HOME/Documents/programs/julia/bin:$PATH"
export PATH="$HOME/.local/bin:$PATH"
export DENO_INSTALL="/home/heinrich/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
export PATH="/home/heinrich/.cargo/bin:$PATH"

# Aliasies
alias l='ls -lhAFa'
alias py='python'
alias dog='cat'
alias vim='nvim'

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
eval "$(zoxide init --cmd cd zsh)"
eval "$(~/.rbenv/bin/rbenv init - zsh)"

plugins=(git env wakatime autosuggestions)

neofetch 



# >>> juliaup initialize >>>

# !! Contents within this block are managed by juliaup !!

path=('/home/heinrich/.juliaup/bin' $path)
export PATH

# <<< juliaup initialize <<<

