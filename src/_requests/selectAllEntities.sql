SELECT
  INSERTED,
  ID, 
  PAR1, 
  PAR2, 
  PAR3, 
  PAR4, 
  PAR5, 
  PAR6, 
  PAR7, 
  PAR8, 
  PAR9, 
  PAR10, 
  PAR11, 
  PAR12, 
  PAR13, 
  PAR14, 
  PAR15, 
  PAR16, 
  PAR17, 
  PAR18, 
  PAR19, 
  PAR20
FROM
  TKB_ENTITIES_STORE
WHERE
  INSERTED IN (SELECT
    MAX(INSERTED)
  FROM
    TKB_ENTITIES_STORE
  GROUP BY
    ID);