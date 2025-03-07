{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_22

    # Node Package manager
    npm

    # dev tools
    typescript
    turbo
  ];

  shellHook = ''
    echo "Node.js development environment loaded"
    echo "Node.js version: $(node --version)"
    echo "npm version: $(npm --version)"
    echo "TypeScript version: $(tsc --version)"
  '';
}
