CREATE USER 'tkb'@'%' IDENTIFIED BY 'tkb_pass';
CREATE USER 'tkb_extractor'@'%' IDENTIFIED BY 'tkb_extractor_pass';

GRANT SELECT, INSERT, DELETE ON kiln.TKB_ENTITIES_STORE TO 'tkb'@'%';
GRANT SELECT ON kiln.TKB_ENTITIES_STORE TO 'tkb_extractor'@'%';