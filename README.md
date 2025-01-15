# Controllable UI - Angular

**Controllable UI Library** provides developers with the ultimate flexibility and control over user interface components. It allows you to fully customize the behavior, styling, and interaction logic, enabling you to create highly dynamic, responsive, and accessible UIs that are tailored to your needs.

## Components:

- [Tooltip](projects/ngx-tooltip/README.md)

## Deploy

```PowerShell
# deploy demo app
ng build  demo --output-path ./docs --base-href /controllable-ui-angular/
Move-Item -Path .\docs\browser\* -Destination .\docs\

# deploy ngx-tooltip package
ng build ngx-tooltip
cd ./dist/ngx-tooltip/
npm publish --access public
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
