# Set the default shell
export SHELL="/bin/zsh"

# Set the prompt
PROMPT='%(?:%{[01;32m%}%1{➜%} :%{[01;31m%}%1{➜%} )  %{[36m%}%~%{[00m%} %# '
#PROMPT='%B%m%~%b %# '

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

# Enable zinit plugins
if command -v zinit >/dev/null 2>&1; then
    zinit light zdharma/fast-syntax-highlighting
    zinit light zsh-users/zsh-autosuggestions
    zinit light zsh-users/zsh-history-substring-search
    zinit light johnhamelink/env-zsh
fi


# Set the editor (change it to your preferred editor)
export VISUAL=nvim
export EDITOR=nvim

# Add your customizations or additional plugins here

# ... (your customizations)



### End of Zinit's installer chunk
#

export PATH="${PATH}:${HOME}/Documents/programs/swww/target/release"
export PATH="$HOME/haskell/music:$PATH"
export PATH="$HOME/Documents/programs/vesktop:$PATH"
export PATH="$HOME/Documents/programs/zig:$PATH"
export PATH="$HOME/Documents/programs/julia/bin:$PATH"
export PATH="$HOME/.local/bin:$PATH"
export DENO_INSTALL="$HOME/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
export PATH="$HOME/.cargo/bin:$PATH"

# Enable ZSH history
HISTFILE=~/.zsh_history
HISTSIZE=1000000  # Number of commands to keep in memory
SAVEHIST=1000000  # Number of commands to save to history file

# Ignore duplicate commands and commands starting with a space
# setopt HIST_IGNORE_DUPS
# setopt HIST_IGNORE_SPACE

# Append to history file instead of overwriting
setopt APPEND_HISTORY

# Share history across sessions
setopt SHARE_HISTORY


# Aliasies
alias l='ls -lhAFa'
alias py='python'
alias dog='cat'
alias vim='nvim'

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
eval "$(zoxide init --cmd cd zsh)"

plugins=(git env wakatime autosuggestions sudo zsh-history-substring-search)

fastfetch 



# >>> juliaup initialize >>>

# !! Contents within this block are managed by juliaup !!

path=('/home/heinrich/.juliaup/bin' $path)
export PATH

# <<< juliaup initialize <<<

