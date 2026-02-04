import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { ConsumablesComponent } from './components/consumables/consumables.component';
import { LicensesComponent } from './components/licenses/licenses.component';
import { PeopleComponent } from './components/people/people.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ComponentsPageComponent } from './components/components-page/components-page.component';
import { CreateAssetComponent } from './components/create-asset/create-asset.component';
import { CreateLicenseComponent } from './components/create-license/create-license.component';
import { CreateAccessoryComponent } from './components/create-accessory/create-accessory.component';
import { CreateConsumableComponent } from './components/create-consumable/create-consumable.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateAppComponent } from './components/create-app-component/create-app-component.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { DataManagementComponent } from './components/data-management/data-management.component';
import { EditAssetComponent } from './components/edit-asset/edit-asset.component';
import { EditLicenseComponent } from './components/edit-license/edit-license.component';
import { EditAccessoryComponent } from './components/edit-accessory/edit-accessory.component';
import { EditConsumableComponent } from './components/edit-consumable/edit-consumable.component';
import { EditAppComponent } from './components/edit-app-component/edit-app-component.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { QrStickerComponent } from './components/qr-sticker/qr-sticker.component';
import { StatusLabelsComponent } from './components/settings-pages/status-labels/status-labels.component';
import { AssetModelsComponent } from './components/settings-pages/asset-models/asset-models.component';
import { CategoriesComponent } from './components/settings-pages/categories/categories.component';
import { ManufacturersComponent } from './components/settings-pages/manufacturers/manufacturers.component';
import { SuppliersComponent } from './components/settings-pages/suppliers/suppliers.component';
import { DepartmentsComponent } from './components/settings-pages/departments/departments.component';
import { LocationsComponent } from './components/settings-pages/locations/locations.component';
import { CompaniesComponent } from './components/settings-pages/companies/companies.component';
import { GeneralSettingsComponent } from './components/settings-pages/users/users.component';
import { SbusComponent } from './components/settings-pages/sbus/sbus.component';
import { BarcodesLabelsComponent } from './components/settings-pages/barcodes-labels/barcodes-labels.component';
import { EditStatusLabelComponent } from './components/settings-pages/edit-status-label/edit-status-label.component';
import { CreateStatusLabelComponent } from './components/settings-pages/create-status-label/create-status-label.component';
import { CreateAssetModelComponent } from './components/settings-pages/create-asset-model/create-asset-model.component';
import { EditAssetModelComponent } from './components/settings-pages/edit-asset-model/edit-asset-model.component';
import { CreateCategoryComponent } from './components/settings-pages/create-category/create-category.component';
import { EditCategoryComponent } from './components/settings-pages/edit-category/edit-category.component';
import { CreateManufacturerComponent } from './components/settings-pages/create-manufacturer/create-manufacturer.component';
import { EditManufacturerComponent } from './components/settings-pages/edit-manufacturer/edit-manufacturer.component';
import { CreateSupplierComponent } from './components/settings-pages/create-supplier/create-supplier.component';
import { EditSupplierComponent } from './components/settings-pages/edit-supplier/edit-supplier.component';
import { CreateDepartmentComponent } from './components/settings-pages/create-department/create-department.component';
import { EditDepartmentComponent } from './components/settings-pages/edit-department/edit-department.component';
import { CreateLocationComponent } from './components/settings-pages/create-location/create-location.component';
import { EditLocationComponent } from './components/settings-pages/edit-location/edit-location.component';
import { CreateCompanyComponent } from './components/settings-pages/create-company/create-company.component';
import { EditCompanyComponent } from './components/settings-pages/edit-company/edit-company.component';
import { CreateSbuComponent } from './components/settings-pages/create-sbu/create-sbu.component';
import { EditSbuComponent } from './components/settings-pages/edit-sbu/edit-sbu.component';
import { AuthenticationUsersComponent } from './components/settings-pages/authentication-users/authentication-users.component';
import { EditAuthenticationUserComponent } from './components/settings-pages/edit-authentication-user/edit-authentication-user.component';
import { EmailSettingsComponent } from './components/settings-pages/email-settings/email-settings.component';
import { NotificationSettingsComponent } from './components/settings-pages/notification-settings/notification-settings.component';
import { EmailPreviewComponent } from './components/email-preview/email-preview.component';
import { AmsFarCheckComponent } from './components/ams-far-check/ams-far-check.component';
import { AmsFarDetailsComponent } from './components/ams-far-details/ams-far-details.component';
import { LdapSettingsComponent } from './components/settings-pages/ldap-settings/ldap-settings.component';
import { AmsCheckComponent } from './components/ams-check/ams-check.component';
import { AmsCheckDetailsComponent } from './components/ams-check-details/ams-check-details.component';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'assets', component: AssetListComponent },
      { path: 'accessories', component: AccessoriesComponent },
      { path: 'consumables', component: ConsumablesComponent },
      { path: 'components', component: ComponentsPageComponent },
      { path: 'licenses', component: LicensesComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'reports', component: ReportsComponent },
      {
        path: 'settings',
        component: SettingsComponent
      },
      // All settings sub-routes are now standalone
      { path: 'settings/status-labels', component: StatusLabelsComponent },
      { path: 'settings/status-label/create', component: CreateStatusLabelComponent },
      { path: 'settings/status-label/edit/:id', component: EditStatusLabelComponent },
      { path: 'settings/asset-models', component: AssetModelsComponent },
      { path: 'settings/asset-model/create', component: CreateAssetModelComponent },
      { path: 'settings/asset-model/edit/:id', component: EditAssetModelComponent },
      { path: 'settings/categories', component: CategoriesComponent },
      { path: 'settings/category/create', component: CreateCategoryComponent },
      { path: 'settings/category/edit/:id', component: EditCategoryComponent },
      { path: 'settings/manufacturers', component: ManufacturersComponent },
      { path: 'settings/manufacturer/create', component: CreateManufacturerComponent },
      { path: 'settings/manufacturer/edit/:id', component: EditManufacturerComponent },
      { path: 'settings/suppliers', component: SuppliersComponent },
      { path: 'settings/supplier/create', component: CreateSupplierComponent },
      { path: 'settings/supplier/edit/:id', component: EditSupplierComponent },
      { path: 'settings/departments', component: DepartmentsComponent },
      { path: 'settings/department/create', component: CreateDepartmentComponent },
      { path: 'settings/department/edit/:id', component: EditDepartmentComponent },
      { path: 'settings/locations', component: LocationsComponent },
      { path: 'settings/location/create', component: CreateLocationComponent },
      { path: 'settings/location/edit/:id', component: EditLocationComponent },
      { path: 'settings/companies', component: CompaniesComponent },
      { path: 'settings/company/create', component: CreateCompanyComponent },
      { path: 'settings/company/edit/:id', component: EditCompanyComponent },
      { path: 'settings/authentication', component: AuthenticationUsersComponent },
      { path: 'settings/authentication/edit/:id', component: EditAuthenticationUserComponent },
      { path: 'settings/users', component: GeneralSettingsComponent },
      { path: 'settings/sbus', component: SbusComponent },
      { path: 'settings/sbu/create', component: CreateSbuComponent },
      { path: 'settings/sbu/edit/:id', component: EditSbuComponent },
      { path: 'settings/barcodes-labels', component: BarcodesLabelsComponent },
      { path: 'settings/email', component: EmailSettingsComponent },
      { path: 'settings/notifications', component: NotificationSettingsComponent },
      { path: 'settings/ldap', component: LdapSettingsComponent },

      { path: 'asset/create', component: CreateAssetComponent },
      { path: 'asset/edit/:id', component: EditAssetComponent },
      { path: 'license/create', component: CreateLicenseComponent },
      { path: 'license/edit/:id', component: EditLicenseComponent },
      { path: 'accessory/create', component: CreateAccessoryComponent },
      { path: 'accessory/edit/:id', component: EditAccessoryComponent },
      { path: 'consumable/create', component: CreateConsumableComponent },
      { path: 'consumable/edit/:id', component: EditConsumableComponent },
      { path: 'component/create', component: CreateAppComponent },
      { path: 'component/edit/:id', component: EditAppComponent },
      { path: 'user/create', component: CreateUserComponent },
      { path: 'user/edit/:id', component: EditUserComponent },
      { path: 'data-management', component: DataManagementComponent },
      { path: 'ams-far-check', component: AmsFarCheckComponent },
      { path: 'ams-far-check/details/:category', component: AmsFarDetailsComponent },
      { path: 'ams-check', component: AmsCheckComponent },
      { path: 'ams-check/details/:category', component: AmsCheckDetailsComponent },
      { path: 'qr-sticker', component: QrStickerComponent },
      { path: 'email-preview/asset-updated', component: EmailPreviewComponent },
    ]
  },
  // Redirect any unknown paths to the main guarded route
  { path: '**', redirectTo: '', pathMatch: 'full' }
];