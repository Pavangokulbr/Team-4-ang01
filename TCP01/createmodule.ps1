[CmdletBinding()]
param (
    [Parameter(Mandatory=$true)]
    [string]
    $MName,
    
    [Parameter(Mandatory=$true)]
    [string]
    $CName
    
)
function ModifyString{
    param (
        [string]
        $TempStr
    )
    process {
        $resultString = ""
        for ($i = 0; $i -lt $TempStr.Length; $i++) {
            [char]$currentChar = $TempStr[$i]
            if ($currentChar -cmatch '[A-Z]') {
                [string]$str = $currentChar
                $resultString += "-" + $str.ToLower()
            } else {
                $resultString += $currentChar
            }
        }
        if ($resultString.StartsWith("-")) {
            $resultString = $resultString.Substring(1)
        }
    }
    end {
        Write-Host "Modified string: $TempStr to $resultString"
        return $resultString
    }
}
function UpdateAppRoute {
    param (
        [string]
        $ModifiedName,
        
        [string]
        $ActualName
    )
    
    begin {
        $URLpath =$($ModifiedName) -replace '-'
        # Define the new child route you want to add
        $newChildRoute = @{
            path = "path:'$($URLpath)'";
            loadChildren = "loadChildren: () => import('./modules/$($ModifiedName)/$($ModifiedName).module').then((m) => m.$($ModuleName)Module),";
        }

        # Path to your app.module.routing.ts file
        $routingFilePath = ".\src\app\app-routing.module.ts"
    }
    
    process {


        # Read the existing content of the routing file
        $routingFileContent = Get-Content $routingFilePath -Raw

        $defaultLayoutIndex = $routingFileContent.IndexOf("{`r`n  path:'',`r`n  component:LayoutComponent,`r`n  children:[")
        if ($defaultLayoutIndex -ge 0) {
            # Insert the new child route configuration
            $routingFileContent = $routingFileContent.Insert($defaultLayoutIndex + 60, "`n`t`t`t{`r`n`t`t`t`t$($newChildRoute.path),`r`n`t`t`t`t$($newChildRoute.loadChildren)`r`n`t`t`t},`n")
        }
        # Write the updated content back to the routing file
        Set-Content $routingFilePath -Value $routingFileContent
    }
    
    end {
        Write-Host "Child routes added to DefaultLayoutComponent in app.module.routing.ts "
    }
}
function UpdateModuleRoute {
    param (
        [string]
        $ModuleName,

        [string]
        $ModifiedName,
        
        [string]
        $ActualName
    )
    
    begin {
        # Define the new child route you want to add
        $newChildRoute = @{
            path='';
            component= "$($ActualName)Component";
            title= "$($ModuleName -replace '-' ) $($ModifiedName)";
        }
        # Path to your app.module.routing.ts file
        $routingFilePath = ".\src\app\modules\$($ModuleName)\$($ModuleName)-routing.module.ts"
    }
    
    process {
        # Read the existing content of the routing file
        $routingFileContent = Get-Content $routingFilePath -Raw
        #import statement
        $routingFileContent = $routingFileContent.Insert(0, "import { $($newChildRoute.component) } from './pages/$($ModifiedName)/$($ModifiedName).component';`r`n")

        $defaultLayoutIndex = $routingFileContent.IndexOf("const routes: Routes = [")
        if ($defaultLayoutIndex -ge 0) {
            # Insert the new child route configuration
            $routingFileContent = $routingFileContent.Insert($defaultLayoutIndex + 24, "`r`n`t{ path:'$($newChildRoute.path)', component:$($newChildRoute.component), title: '$($newChildRoute.title)'},`r`n")
        }
        # Write the updated content back to the routing file
        Set-Content $routingFilePath -Value $routingFileContent
    }
    
    end {
        Write-Host "Child routes added to $($ModuleName)Component in $($ModuleName)-routing.module.ts "
    }
}
Set-Location .\

# Generate the Angular Module
ng g m modules/$MName --routing 
$ModuleName=$MName;
$MName = ModifyString $MName

# Generate the Angular component
ng g c modules/$MName/pages/$CName 
$ComponentName=$CName;
$CName = ModifyString $CName

UpdateAppRoute -ModifiedName $MName -ActualName $ModuleName
UpdateModuleRoute -ModifiedName $CName -ActualName $ComponentName -ModuleName $MName
