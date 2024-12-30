export const MESS_ERROR = {
    ROLE: 'Quyền không phù hợp',
    GENDER: 'Giới tính không phù hợp',
    EMAIL: 'Email không đúng định dạng, vd: abc@gmail.com',
    PASS:'Mật khẩu nhập chưa đúng định dạng',
    PHONE_NUMBER: 'Số điện thoại không đúng định dạng, vd: 0988777666',
    CONFIRM_PASSWORD: 'Nhập lại mật khẩu không chính xác',
    P_PATTERN:'Ký tự nhập chưa hợp lệ',
    FIELD_NOT_EMPTY: (field: string) => `${field} không được để trống`,

    MIN_LENGTH: ({ field, length }: { field: string; length: number }) =>
        `${field} phải có độ dài ít nhất ${length} kí tự`,

    MAX_LENGTH: ({ field, length }: { field: string; length: number }) =>
        `${field} phải có độ dài tối đa ${length} kí tự`,

    MIN_VALUE: ({ field, val }: { field: string; val: number }) => `${field} phải lớn hơn ${val}`,
    MIN_EQUAL_VALUE: ({ field, val }: { field: string; val: number }) => `${field} phải lớn hơn hoặc bằng ${val}`,

    MAX_VALUE: ({ field, val }: { field: string; val: number }) => `${field} phải bé hơn ${val}`,
    MAX_EQUAL_VALUE: ({ field, val }: { field: string; val: number }) => `${field} phải bé hơn hoặc bằng ${val}`,
};
