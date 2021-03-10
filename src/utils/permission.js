import store from "@/store";

export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const permissions = store.getters["user/permissions"];
    const role = store.getters["user/role"];
    const permissionPermissions = value;

    return (
      permissions.some((role) => {
        return permissionPermissions.includes(role);
      }) &&
      role.some((role) => {
        return permissionPermissions.includes(role);
      })
    );
  } else {
    return false;
  }
}
export function myPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const permissions = store.getters["user/permissions"];
    const permissionPermissions = value;
    return permissions.some((role) => {
      return permissionPermissions.includes(role);
    });
  } else {
    return false;
  }
}
